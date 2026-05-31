import { Reader } from "../models/Reader";
import { Copy } from "../models/Copy";

export class BorrowService {
  borrow(reader: Reader, copy: Copy): boolean {
    if (!copy.isCopyAvailable()) {
      return false;
    }

    copy.setAvailability(false);
    reader.borrowCopy(copy);
    return true;
  }

  returnBook(reader: Reader, copy: Copy): boolean {
    if (!reader.hasBorrowedCopy(copy)) {
      return false;
    }

    reader.returnCopy(copy);
    copy.setAvailability(true);
    return true;
  }
}
