// Copyright 2021-2023 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file ping/v1/ping.proto (package ping.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message ping.v1.PingRequest
 */
export class PingRequest extends Message<PingRequest> {
  /**
   * @generated from field: int64 number = 1;
   */
  number = protoInt64.zero;

  constructor(data?: PartialMessage<PingRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ping.v1.PingRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "number", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PingRequest {
    return new PingRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PingRequest {
    return new PingRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PingRequest {
    return new PingRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PingRequest | PlainMessage<PingRequest> | undefined, b: PingRequest | PlainMessage<PingRequest> | undefined): boolean {
    return proto3.util.equals(PingRequest, a, b);
  }
}

/**
 * @generated from message ping.v1.PingResponse
 */
export class PingResponse extends Message<PingResponse> {
  /**
   * @generated from field: int64 number = 1;
   */
  number = protoInt64.zero;

  constructor(data?: PartialMessage<PingResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ping.v1.PingResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "number", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PingResponse {
    return new PingResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PingResponse {
    return new PingResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PingResponse {
    return new PingResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PingResponse | PlainMessage<PingResponse> | undefined, b: PingResponse | PlainMessage<PingResponse> | undefined): boolean {
    return proto3.util.equals(PingResponse, a, b);
  }
}

