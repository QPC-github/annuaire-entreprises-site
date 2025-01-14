import React from 'react';
import { departements } from '#utils/labels/departements';
import Select from '.';

const SelectDepartement: React.FC<{
  placeholder?: string;
  label?: string;
  name?: string;
  maxWidth?: number;
  defaultValue?: string;
}> = ({ label, placeholder, name, defaultValue = undefined }) => (
  <Select
    label={label}
    name={name}
    defaultValue={defaultValue}
    placeholder={placeholder}
    options={Object.keys(departements)
      .sort()
      .map((k) => {
        //@ts-ignore
        return { value: k, label: `${k} - ${departements[k]}` };
      })}
  />
);

export default SelectDepartement;
