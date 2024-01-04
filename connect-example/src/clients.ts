import { createPromiseClient } from "@connectrpc/connect";
import {
  createConnectTransport,
  createGrpcWebTransport,
} from "@connectrpc/connect-web";

import { PingService } from "../gen/ping/v1/ping_connect";

const connectTransportPy = createConnectTransport({
  baseUrl: "http://localhost:5555/py",
});

const grpcWebTransportPy = createGrpcWebTransport({
  baseUrl: "http://localhost:5555/py",
});

export const connectClientPy = createPromiseClient(PingService, connectTransportPy);

export const grpcWebClientPy = createPromiseClient(PingService, grpcWebTransportPy);

const connectTransportGo = createConnectTransport({
  baseUrl: "http://localhost:5555/go",
});

const grpcWebTransportGo = createGrpcWebTransport({
  baseUrl: "http://localhost:5555/go",
});

export const connectClientGo = createPromiseClient(PingService, connectTransportGo);

export const grpcWebClientGo = createPromiseClient(PingService, grpcWebTransportGo);
