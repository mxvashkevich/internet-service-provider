interface FormValues {
  [k: string]: FormDataEntryValue;
}

function validateFormEntries(
  formValues: FormValues,
  setError: React.Dispatch<React.SetStateAction<string>>,
): boolean {
  for (const key in formValues) {
    // Проверяем форму на наличие пустых полей
    if (!formValues[key]) {
      setError('Форма не заполнена');
      return true;
    }
  }
  return false;
}

export default validateFormEntries;
