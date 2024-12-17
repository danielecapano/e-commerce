import { useAdminContext } from "../hook/useAdminContext";

const SizesCheckboxes = () => {
  const { setSizes, error, checkboxes, setCheckboxes } = useAdminContext();

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    // Aggiorna lo stato dei checkbox
    setCheckboxes((prev) => {
      const updatedCheckboxes = { ...prev, [name]: checked };

      // Calcola le taglie selezionate
      const selectedSizes = Object.keys(updatedCheckboxes).filter(
        (key) => updatedCheckboxes[key]
      );
      setSizes(selectedSizes);

      return updatedCheckboxes;
    });
  };
  return (
    <div>
      <p className='mb-2'>Taglie</p>
      <div
        className={`flex gap-3 ${
          error.sizes ? "ring-2 ring-red-500 outline-none bg-red-50" : ""
        }`}
      >
        {Object.keys(checkboxes).map((size) => (
          <label
            key={size}
            className={`bg-gray-200 border px-3 py-1 cursor-pointer ${
              checkboxes[size] ? "border-orange-500 bg-gray-300" : ""
            }`}
            htmlFor={size}
          >
            <input
              type='checkbox'
              name={size}
              id={size}
              checked={checkboxes[size]}
              onChange={handleCheckboxChange}
              hidden
              className='peer'
            />
            {size}
          </label>
        ))}
      </div>
      {error.sizes && <p className='text-red-500 text-sm'>{error.sizes}</p>}
    </div>
  );
};

export default SizesCheckboxes;
