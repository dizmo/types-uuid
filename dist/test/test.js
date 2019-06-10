"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var chai_1 = require("chai");

require("mocha");

describe("UUID", function () {
  var uuid = "72513c1d-516e-494b-b896-b288571dca94";
  it("should exist", function () {
    chai_1.expect(uuid).to.not.be.an("undefined");
  });
  it("should be a string", function () {
    chai_1.expect(uuid).to.be.a("string");
  });
});
//# sourceMappingURL=test.js.map