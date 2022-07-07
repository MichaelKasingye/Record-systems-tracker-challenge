  
  export const selectOptions = [
    { value: 'accessories', label: 'Accessories' },
    { value: 'headsets', label: 'Headsets' },
    { value: 'USBs', label: 'USBs' },
    { value: 'phone cases', label: 'Phone Cases' },
  ];
  export const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '.5rem',
    }),

    multiValue: (provided) => ({
      ...provided,
      borderRadius: '.5rem',
    }),

    multiValueRemove: (provided) => ({
      ...provided,
      borderRadius: '.5rem',
    }),

    placeholder: (provided) => ({
      ...provided,
      borderRadius: '.5rem',
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return {
        ...provided,
        opacity,
        transition,
      };
    },
  };
