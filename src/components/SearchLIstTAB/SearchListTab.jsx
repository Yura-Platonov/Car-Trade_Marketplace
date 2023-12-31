import { Button, Div } from "./SearchListTab.styled";
import { XBtn } from "./SearchListTabSVG";

const SearchListTab = ({ initialValues, onSubmit }) => {
  const handleTabClick = field => {
    // Перевіряємо, чи поле вже має значення, і якщо так, змінюємо його на пустий рядок
    const updatedValues = {
      ...initialValues,
      [field]: initialValues[field] ? '' : 'SomeValue',
    };
    onSubmit(updatedValues);
  };
   return (
     <>
       <Div>
         {Object.entries(initialValues).map(
           ([field, value]) =>
             value !== '' && (
               <Button
                 key={field}
                 type="button"
                 onClick={() => handleTabClick(field)}
               >
                 {`${value}`} <XBtn />
               </Button>
             )
         )}
       </Div>
     </>
   );
};
export default SearchListTab;
