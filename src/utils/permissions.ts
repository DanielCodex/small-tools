export interface Permissions {
  read: string;
  write: string;
  execute: string;
}

export const sumOwner = (owner: Permissions) =>
  Number(owner.read) + Number(owner.write) + Number(owner.execute);

export const sumGroup = (group: Permissions) =>
  Number(group.read) + Number(group.write) + Number(group.execute);

export const sumOther = (other: Permissions) =>
  Number(other.read) + Number(other.write) + Number(other.execute);
