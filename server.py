from internal.gen.ping import v1
from grpclib.server import Server
from grpclib.utils import graceful_exit

class PingHandler(v1.PingServiceBase):
    async def ping(self, ping_request: v1.PingRequest) -> v1.PingResponse:
        print(f"Received ping request: {ping_request.number}")
        return v1.PingResponse(number=ping_request.number)
    

async def main():
    server = Server([PingHandler()])
    with graceful_exit([server]):
        await server.start(host="0.0.0.0", port=8080)
        await server.wait_closed()

if __name__ == "__main__":
    import logging
    logging.basicConfig(level=logging.DEBUG)
    import asyncio
    asyncio.run(main())