import { expect } from "chai";
import { UUID } from "../lib/index";

import "mocha";

describe("UUID", () => {
    const uuid: UUID = "72513c1d-516e-494b-b896-b288571dca94";
    it("should exist", () => {
        expect(uuid).to.not.be.an("undefined");
    });
    it("should be a string", () => {
        expect(uuid).to.be.a("string");
    });
});
