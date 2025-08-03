import {
  Checkbox,
  Combobox,
  Group,
  Input,
  Pill,
  PillsInput,
  useCombobox,
} from '@mantine/core';
import {  IconSelector } from '@tabler/icons-react';
import { useEffect, useState } from 'react';



const MultiSelector = (props:any) => {
  useEffect(()=>{
           setData(props.options);
  })
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [value, setValue] = useState<string[]>([]);
  const [data,setData] =useState<string[]>([]);
  const [search, setSearch] = useState(''); // ✅ this is the real fix!

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

 const values = value
    .slice(0,1)
    .map((item) => (
      <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
        {item}
      </Pill>
    ));

  // ✅ filter the options based on search
  const filteredOptions = data
    .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item) } >
        <Group gap="sm">
          <Checkbox className='text-frangipani-700'
            size="xs"
            color="frangipani.3"
            checked={value.includes(item)}
            onChange={() => {}}
            aria-hidden
            tabIndex={-1}
            style={{ pointerEvents: 'none' }}
          />
          <span className='text-frangipani-200'>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
      <Combobox.DropdownTarget>
        <PillsInput 
          variant="unstyled"
          rightSection={<IconSelector/>}
          pointer
          onClick={() => combobox.toggleDropdown()}
          leftSection={
            <div className="text-frangipani-200 p-1 bg-shiraz-700 mr-2 rounded-full">
              <props.icon />
            </div>
          }
        >
          <Pill.Group>
            {value.length > 0 ? (
              <>
                {values}
                {value.length > 1 && (
                  <Pill>+{value.length -1} more</Pill>
                )}
              </>
            ) : (
              <Input.Placeholder className='!text-shiraz-200'>{props.title}</Input.Placeholder>
            )}

            
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown >
        <Combobox.Search
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          placeholder="Search groceries"
        />
        <Combobox.Options>{filteredOptions}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default MultiSelector;
