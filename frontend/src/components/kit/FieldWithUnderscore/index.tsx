  interface FieldProps {
  fieldKey: string;
  fieldValue: string;
  isLastField: boolean;
  isTextNeeded:boolean
}

export default function FieldWithUnderscore({
  fieldKey,
  fieldValue,
  isLastField,
  isTextNeeded
}: FieldProps) {
  return (
    <>
      <div className="card-row flex p-5 justify-around">
        <div className="capitalize flex-1 col font-bold">
          <i className={`fa-brands fa-${fieldKey}`}></i>
          {isTextNeeded && fieldKey}
        </div>
        <div className="flex-1 col-right  font-light">{fieldValue}</div>
      </div>
      {!isLastField && <hr />}
    </>
  );
}
