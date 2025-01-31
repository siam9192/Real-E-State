"use client";
import React, { ReactNode, useState } from "react";
import Form from "../form/Form";
import FormInput from "../form/FormInput";
import FormTextArea from "../form/FormTextarea";

import SearchSelect from "../select/SearchSelect";
import AddPropertyImageInput from "../ui/AddPropertyImageInput";
import { useGetAmenitiesQuery } from "@/app/redux/api/amenity.api";
import { RxCross2 } from "react-icons/rx";
import UseBounce from "@/useBounce";
import { RiServiceLine } from "react-icons/ri";
import FormSelect from "../form/FormSelect";
import { EPropertyType } from "@/reuse/type";
import { ILocationAdvantage } from "@/types/sell-property.type";
import { MdDelete } from "react-icons/md";
import AddAdvantageInput from "../ui/AddAdvantageInput";
import Checkbox from "../ui/Checkbox";
import FormCheckbox from "../form/FormCheckbox";

export const AddPropertySectionContainer = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => (
  <div className="p-5 bg-dark_light_color rounded-lg space-y-3">
    <h3 className="text-2xl font-medium dark:text-dark_text_high_color">{title}</h3>
    {children}
  </div>
);

function AddSellPropertyForm() {
  const [amenityKeyword, setAmenityKeyword] = useState("");

  const [addedAmenities, setAddedAmenities] = useState<string[]>([]);

  const amenitySearchTerm = UseBounce(amenityKeyword);

  const [propertyType, setPropertyType] = useState<string>(EPropertyType.HOUSE);

  const [addedLocationAdvantage, setAddedLocationAdvantage] = useState<ILocationAdvantage[]>([]);

  const {
    data,
    refetch,
    // isLoading: isAmenitiesLoading,
    isFetching: isAmenitiesFetching,
  } = useGetAmenitiesQuery({ searchTerm: amenitySearchTerm, propertyType });
  const amenities = data?.data;

  const amenitiesOptions =
    amenities
      ?.filter((item) => !addedAmenities.includes(item.name))
      .map((amenity) => ({
        display: amenity.name,
        value: amenity,
      })) || [];

  const handelAmenitySelect = (value: { value: IAmenity }) => {
    setAddedAmenities([...addedAmenities, value.value.name]);
  };

  const onAmenityInputFieldChange = (value: string) => {
    setAmenityKeyword(value);
    refetch();
  };

  const handelRemoveAmenity = (index: number) => {
    const arr = addedAmenities.filter((_, i) => i !== index);
    setAddedAmenities(arr);
  };

  const handelSubmit = () => {};

  const propertyTypeOptions = Object.values(EPropertyType).map((type) => ({
    display: type,
    value: type,
  }));

  const handelSelectPropertyType = (value: string) => {
    setPropertyType(value);
    setAddedAmenities([]);
  };

  const handelAddLocationAdvantage = (value: ILocationAdvantage) => {
    setAddedLocationAdvantage([...addedLocationAdvantage, value]);
  };

  const handelRemoveLocationAdvantage = (index: number) => {
    const arr = addedLocationAdvantage.filter((_, i) => i !== index);
    setAddedLocationAdvantage(arr);
  };

  const formDefaultValues = {
    address: {
      city: "UN",
      country: "UK",
      state: "SRA",
    },
  };

  let roomOptions = [...Array(21)].map((_, index) => ({
    display: index.toString(),
    value: index,
  }));

  const roomDefaultOption = roomOptions[0];
  roomOptions = roomOptions.slice(1, roomOptions.length);
  return (
    <Form onSubmit={handelSubmit} defaultValues={formDefaultValues}>
      <div className="flex justify-end gap-2 items-center">
        {/* <button type='reset' className=" px-4 py-3 bg-warning_color text-white rounded-lg mb-5 ">
          Clear
        </button> */}
        <button
          disabled
          className=" px-4 py-3 bg-primary_color disabled:bg-dark_highlight_color text-white rounded-lg mb-5 "
        >
          Submit
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="space-y-10 lg:col-span-2 ">
          <AddPropertySectionContainer title="Property Details">
            <FormInput name="title" label="Title" />
            <FormSelect
              onChange={handelSelectPropertyType}
              defaultOption={propertyTypeOptions[0]}
              options={propertyTypeOptions.slice(1, propertyTypeOptions.length)}
              name="property_type"
              label="Property Type"
            />
            <FormTextArea name="description" label="Description" />
          </AddPropertySectionContainer>
          <AddPropertySectionContainer title="Pricing & Essentials">
            <div className="grid grid-cols-2 gap-5">
              {propertyType !== EPropertyType.Land ? (
                <>
                  <FormSelect
                    defaultOption={roomDefaultOption}
                    options={roomOptions}
                    name="bedroom"
                    label="Bedroom"
                  />
                  <FormSelect
                    defaultOption={roomDefaultOption}
                    options={roomOptions}
                    name="bathroom"
                    label="Bathroom"
                  />
                  <FormSelect
                    defaultOption={roomDefaultOption}
                    options={roomOptions}
                    name="garage"
                    label="Garage"
                  />
                  <FormSelect
                    defaultOption={roomDefaultOption}
                    options={roomOptions}
                    name="build_year"
                    label="Build Year"
                  />
                </>
              ) : null}
              <FormInput name="area_size" label="Area Size" />
              <FormInput name="price" label="Price" />
            </div>
          </AddPropertySectionContainer>
          <AddPropertySectionContainer title="Property Location">
            <div className="grid grid-cols-2 gap-5">
              <FormInput name="address.street" label="Street" />
              <FormInput name="address.zip_code" label="Zip Code" />
              <FormInput name="address.city" label="City" readonly />
              <FormInput name="address.state" label="State" readonly />
              <FormInput name="address.country" label="Country" readonly />
            </div>
          </AddPropertySectionContainer>
        </div>

        {/* Col 2 */}
        <div className="space-y-10">
          <AddPropertySectionContainer title="Status">
            <div className="flex md:flex-row flex-col md:items-center gap-2 flex-wrap">
              <FormCheckbox name="status" value="public" defaultChecked label="Public" />
              <FormCheckbox name="status" value="schedule" label="Schedule" />
              <FormCheckbox name="status" value="private" label="Private" />
            </div>
          </AddPropertySectionContainer>

          <AddPropertySectionContainer title="Images">
            <AddPropertyImageInput />
          </AddPropertySectionContainer>
          <AddPropertySectionContainer title="Amenities">
            <div className="flex items-center flex-wrap gap-2">
              {addedAmenities.map((amenity, index) => (
                <div
                  key={amenity}
                  className=" dark:text-dark_text_medium_color p-2 dark:bg-dark_color relative"
                >
                  {amenity}
                  <button
                    onClick={() => handelRemoveAmenity(index)}
                    className=" absolute -right-1 -top-1 text-[0.9rem] dark:text-dark_text_medium_color"
                  >
                    <RxCross2 />
                  </button>
                </div>
              ))}
            </div>
            <SearchSelect
              icon={<RiServiceLine />}
              isLoading={isAmenitiesFetching}
              onInputFieldChange={onAmenityInputFieldChange}
              onSelect={handelAmenitySelect}
              options={amenitiesOptions}
            />
          </AddPropertySectionContainer>
          {addedLocationAdvantage.length ? (
            <AddPropertySectionContainer title="Added Advantages">
              <div className="overflow-x-auto">
                <table className="w-full overflow-x-auto">
                  {/* head */}
                  <thead className="dark:text-dark_text_medium_color md:text-xl  text-[0.8rem]">
                    <tr>
                      <th>Name</th>
                      <th>Distance(KM)</th>
                      <th>Duration(MIN)</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {addedLocationAdvantage.map((advantage, index) => (
                      <tr key={index} className="dark:text-dark_text_low_color">
                        <td>
                          {index + 1}.{advantage.name}
                        </td>
                        <td className="text-center">{advantage.distance_km}</td>
                        <td className="text-center">{advantage.duration_minute}</td>
                        <td className="text-center">
                          <button
                            onClick={() => handelRemoveLocationAdvantage(index)}
                            className=" text-warning_color text-xl "
                          >
                            <MdDelete />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AddPropertySectionContainer>
          ) : null}
          <AddAdvantageInput onAdd={handelAddLocationAdvantage} />
        </div>
      </div>
    </Form>
  );
}

export default AddSellPropertyForm;
