export interface Permissions {
  octalRead: string;
  octalWrite: string;
  octalExecute: string;

  modeRread: string;
  modeWrite: string;
  modeExecute: string;
}

export const sumOwner = (owner: Permissions) =>
  Number(owner.octalRead) +
  Number(owner.octalWrite) +
  Number(owner.octalExecute);

export const sumGroup = (group: Permissions) =>
  Number(group.octalRead) +
  Number(group.octalWrite) +
  Number(group.octalExecute);

export const sumOther = (other: Permissions) =>
  Number(other.octalRead) +
  Number(other.octalWrite) +
  Number(other.octalExecute);

interface modeType {
  octalRead: string;
  octalWrite: string;
  octalExecute: string;
}

export const modeCalculator = (
  owner: modeType,
  group: modeType,
  other: modeType
) => {
  let placeHolder = "---------".split("");
  if (owner.octalRead === "400") {
    placeHolder[0] = "r";
  }
  if (owner.octalWrite === "200") {
    placeHolder[1] = "w";
  }
  if (owner.octalExecute === "100") {
    placeHolder[2] = "x";
  }

  if (group.octalRead === "40") {
    placeHolder[3] = "r";
  }

  if (group.octalWrite === "20") {
    placeHolder[4] = "w";
  }

  if (group.octalExecute === "10") {
    placeHolder[5] = "x";
  }

  if (other.octalRead === "4") {
    placeHolder[6] = "r";
  }

  if (other.octalWrite === "2") {
    placeHolder[7] = "w";
  }

  if (other.octalExecute === "1") {
    placeHolder[8] = "x";
  }

  return placeHolder.join("");
};
