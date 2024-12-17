import { useAdminContext } from "../hook/useAdminContext";

const NumberShoesCheckboxes = () => {
  const { setNumberShoes, error, shoesCheckboxes, setShoesCheckboxes } =
    useAdminContext();

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    // Aggiorna lo stato dei checkbox
    setShoesCheckboxes((prev) => {
      const updatedCheckboxes = { ...prev, [name]: checked };

      // Calcola le taglie selezionate
      const selectedNumbers = Object.keys(updatedCheckboxes).filter(
        (key) => updatedCheckboxes[key]
      );
      setNumberShoes(selectedNumbers);

      return updatedCheckboxes;
    });
  };
  return (
    <div>
      <p className='mb-2'>Numeri</p>
      <div
        className={`flex flex-wrap w-full max-w-[500px] gap-3 ${
          error.sizes ? "ring-2 ring-red-500 outline-none bg-red-50" : ""
        }`}
      >
        {Object.keys(shoesCheckboxes).map((size) => (
          <label
            key={size}
            className={`bg-gray-200 border px-3 py-1 cursor-pointer ${
              shoesCheckboxes[size] ? "border-orange-500 bg-gray-300" : ""
            }`}
            htmlFor={size}
          >
            <input
              type='checkbox'
              name={size}
              id={size}
              checked={shoesCheckboxes[size]}
              onChange={handleCheckboxChange}
              hidden
              className='peer'
            />
            {size}
          </label>
        ))}
      </div>
      {error.numberShoes && (
        <p className='text-red-500 text-sm'>{error.numberShoes}</p>
      )}
    </div>
  );
};

export default NumberShoesCheckboxes;
