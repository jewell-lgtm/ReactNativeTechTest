// get a string from error objects of differing shapes
export function getMessage(e: any): string {
  if (typeof e === "string") {
    return e;
  }
  if (e.message) {
    return e.message;
  }
  return JSON.stringify(e);
}
