const PUBLISHER_ID_REGEX = /^pub-\d{16}$/;
const SLOT_ID_REGEX = /^\d{10}$/;

export function isPublisherId(id: string): boolean {
  return PUBLISHER_ID_REGEX.test(id);
}

export function isSlotId(id: string): boolean {
  return SLOT_ID_REGEX.test(id);
}