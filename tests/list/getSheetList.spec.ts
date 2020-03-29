import { getItems } from "../../src/list/getSheetList";

describe("getSheetList.ts", () => {
    it("list", () => {
        expect(getItems()).toEqual(["test", "test3", "test5"]);
    });
});