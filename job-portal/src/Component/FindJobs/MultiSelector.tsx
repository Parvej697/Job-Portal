import {
  Checkbox,
  Combobox,
  Group,
  Input,
  Pill,
  PillsInput,
  useCombobox,
} from "@mantine/core";
import { IconSelector } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";

const MultiSelector = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setData(props.options);
  }, [props.options]);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
  });

  const [value, setValue] = useState<string[]>([]);
  const [data, setData] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  // ✅ Checkbox select/deselect
  const handleValueSelect = (val: string) => {
    setValue((current) => {
      const newValue = current.includes(val)
        ? current.filter((v) => v !== val)
        : [...current, val];

      // 🔥 Redux update
      dispatch(updateFilter({ [props.title]: newValue }));

      return newValue;
    });
  };

  // ✅ Pill remove
  const handleValueRemove = (val: string) => {
    setValue((current) => {
      const newValue = current.filter((v) => v !== val);

      // 🔥 Redux update
      dispatch(updateFilter({ [props.title]: newValue }));

      return newValue;
    });
  };

  // ✅ Optional: Add new value from search input
  const handleSearchAdd = () => {
    if (search.trim() === "") return;

    const newValue = [...value, search];
    setValue(newValue);

    // 🔥 Redux update
    dispatch(updateFilter({ [props.title]: newValue }));

    setSearch("");
  };

  const values = value.slice(0, 1).map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  // ✅ filter options based on search
  const filteredOptions = data
    .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
    .map((item) => (
      <Combobox.Option
        value={item}
        key={item}
        active={value.includes(item)}
      >
        <Group gap="sm">
          <Checkbox
            className="text-eucalyptus-700"
            size="xs"
            color="eucalyptus.4"
            checked={value.includes(item)}
            onChange={() => {}}
            aria-hidden
            tabIndex={-1}
            style={{ pointerEvents: "none" }}
          />
          <span className="text-!mine-shaft-200">{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={handleValueSelect}
      withinPortal={false}
    >
      <Combobox.DropdownTarget>
        <PillsInput
          variant="unstyled"
          rightSection={<IconSelector />}
          pointer
          onClick={() => combobox.toggleDropdown()}
          leftSection={
            <div className="text-eucalyptus-400 p-1 bg-mine-shaft-800 mr-2 rounded-full">
              <props.icon />
            </div>
          }
        >
          <Pill.Group>
            {value.length > 0 ? (
              <>
                {values}
                {value.length > 1 && <Pill>+{value.length - 1} more</Pill>}
              </>
            ) : (
              <Input.Placeholder className="!text-mine-shaft-200">
                {props.title}
              </Input.Placeholder>
            )}
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Search
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearchAdd()}
          placeholder="Search options"
        />
        <Combobox.Options>{filteredOptions}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default MultiSelector;
