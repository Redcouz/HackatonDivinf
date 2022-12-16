"use strict";
// Copyright 2022 Cartesi Pte. Ltd.
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.describe = exports.command = void 0;
const notices_1 = require("../../graphql/notices");
const utils_1 = require("../utils");
exports.command = "list";
exports.describe = "List notices of an epoch and input";
const DEFAULT_URL = "http://localhost:4000/graphql";
const builder = (yargs) => {
    return yargs
        .option("url", {
        describe: "Reader URL",
        type: "string",
        default: DEFAULT_URL,
    })
        .option("epoch", {
        describe: "Epoch index",
        type: "number",
    })
        .option("input", {
        describe: "Input index",
        type: "number",
    });
};
exports.builder = builder;
const handler = async (args) => {
    const { url, epoch, input } = args;
    // wait for notices to appear in reader
    const notices = await (0, notices_1.getNotices)(url, {
        epoch_index: epoch,
        input_index: input,
    });
    // gathers outputs to print based on the retrieved notices
    // - sorts notices because the query is not sortable
    // - decodes the hex payload as an UTF-8 string, if possible
    // - prints only payload and indices for epoch, input and notice
    const outputs = notices
        .sort((a, b) => {
        // sort by epoch index and then by input index
        const epochResult = a.input.epoch.index - b.input.epoch.index;
        if (epochResult != 0) {
            return epochResult;
        }
        else {
            return a.input.index - b.input.index;
        }
    })
        .map((n) => {
        const output = {};
        output.id = n.id;
        output.epoch = n.input.epoch.index;
        output.input = n.input.index;
        output.notice = n.index;
        output.payload = (0, utils_1.hex2str)(n.payload);
        return output;
    });
    console.log(JSON.stringify(outputs));
};
exports.handler = handler;
