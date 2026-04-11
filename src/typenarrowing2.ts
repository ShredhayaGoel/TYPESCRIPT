type chaiorder = {
  type: string;
  sugar: number;
};
function ischaiorder(obj: any): obj is chaiorder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}
function serveorder(item: chaiorder | string) {
  if (ischaiorder(item)) {
    return `serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `serving custom chai :  ${item}`;
}
