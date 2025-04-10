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
            h_marker_1.HMarker.name,
            ide_marker_1.IDEMarker.name,
            id_marker_1.IDMarker.name,
            ib_marker_1.IBMarker.name,
            iq_marker_1.IQMarker.name,
            ili_marker_1.ILIMarker.name,
            iot_marker_1.IOTMarker.name,
            io_marker_1.IOMarker.name,
            sts_marker_1.STSMarker.name,
            usfm_marker_1.USFMMarker.name,
            toc1_marker_1.TOC1Marker.name,
            toc2_marker_1.TOC2Marker.name,
            toc3_marker_1.TOC3Marker.name,
            toca1_marker_1.TOCA1Marker.name,
            toca2_marker_1.TOCA2Marker.name,
            toca3_marker_1.TOCA3Marker.name,
            is_marker_1.ISMarker.name,
            mt_marker_1.MTMarker.name,
            imt_marker_1.IMTMarker.name,
            ip_marker_1.IPMarker.name,
            ipi_marker_1.IPIMarker.name,
            im_marker_1.IMMarker.name,
            imi_marker_1.IMIMarker.name,
            ipq_marker_1.IPQMarker.name,
            imq_marker_1.IMQMarker.name,
            ipr_marker_1.IPRMarker.name,
            cl_marker_1.CLMarker.name,
            c_marker_1.CMarker.name,
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
