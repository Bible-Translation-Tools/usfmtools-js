"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USFMDocument = void 0;
const marker_1 = require("./marker");
const h_marker_1 = require("./h-marker");
const ide_marker_1 = require("./ide-marker");
const id_marker_1 = require("./id-marker");
const ib_marker_1 = require("./ib-marker");
const iq_marker_1 = require("./iq-marker");
const ili_marker_1 = require("./ili-marker");
const iot_marker_1 = require("./iot-marker");
const io_marker_1 = require("./io-marker");
const sts_marker_1 = require("./sts-marker");
const usfm_marker_1 = require("./usfm-marker");
const toc1_marker_1 = require("./toc1-marker");
const toc2_marker_1 = require("./toc2-marker");
const toc3_marker_1 = require("./toc3-marker");
const toca1_marker_1 = require("./toca1-marker");
const toca2_marker_1 = require("./toca2-marker");
const toca3_marker_1 = require("./toca3-marker");
const is_marker_1 = require("./is-marker");
const mt_marker_1 = require("./mt-marker");
const imt_marker_1 = require("./imt-marker");
const ip_marker_1 = require("./ip-marker");
const ipi_marker_1 = require("./ipi-marker");
const im_marker_1 = require("./im-marker");
const imi_marker_1 = require("./imi-marker");
const ipq_marker_1 = require("./ipq-marker");
const imq_marker_1 = require("./imq-marker");
const ipr_marker_1 = require("./ipr-marker");
const cl_marker_1 = require("./cl-marker");
const c_marker_1 = require("./c-marker");
class USFMDocument extends marker_1.Marker {
    getIdentifier() {
        return "";
    }
    getAllowedContents() {
        return [
            h_marker_1.HMarker,
            ide_marker_1.IDEMarker,
            id_marker_1.IDMarker,
            ib_marker_1.IBMarker,
            iq_marker_1.IQMarker,
            ili_marker_1.ILIMarker,
            iot_marker_1.IOTMarker,
            io_marker_1.IOMarker,
            sts_marker_1.STSMarker,
            usfm_marker_1.USFMMarker,
            toc1_marker_1.TOC1Marker,
            toc2_marker_1.TOC2Marker,
            toc3_marker_1.TOC3Marker,
            toca1_marker_1.TOCA1Marker,
            toca2_marker_1.TOCA2Marker,
            toca3_marker_1.TOCA3Marker,
            is_marker_1.ISMarker,
            mt_marker_1.MTMarker,
            imt_marker_1.IMTMarker,
            ip_marker_1.IPMarker,
            ipi_marker_1.IPIMarker,
            im_marker_1.IMMarker,
            imi_marker_1.IMIMarker,
            ipq_marker_1.IPQMarker,
            imq_marker_1.IMQMarker,
            ipr_marker_1.IPRMarker,
            cl_marker_1.CLMarker,
            c_marker_1.CMarker,
        ];
    }
    constructor() {
        super();
        this.contents = [];
    }
    insert(input) {
        if (input instanceof USFMDocument) {
            this.insertDocument(input);
        }
        else {
            this.insertMarker(input);
        }
    }
    insertMarker(input) {
        if (!this.tryInsert(input)) {
            this.contents.push(input);
        }
    }
    insertDocument(document) {
        this.insertMultiple(document.contents);
    }
    insertMultiple(input) {
        for (const i of input) {
            this.insert(i);
        }
    }
}
exports.USFMDocument = USFMDocument;
