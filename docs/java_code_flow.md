Typical Java app flow (especially Spring Boot) is:

Request comes in (HTTP/API)
Controller receives it
Service runs business logic
Repository/Client fetches/saves data or calls other systems
Service returns result
Controller sends response
Common structure
controller/ → API endpoints (@RestController)
service/ → core logic (@Service)
repository/ → DB access (@Repository, JPA)
model / entity / dto → data objects
config/ → app wiring (@Configuration, @Bean)
exception/ → global error handling (@ControllerAdvice)
With messaging (Kafka/RTMI/etc.)
There are usually two parallel flows:

Synchronous flow: API request → immediate response
Asynchronous flow: App publishes/consumes events in background
Example async flow:

Service finishes business action
Publishes event (Producer)
Another service consumes event (Consumer)
Processes and updates state
Spring Boot startup flow
main() starts app
Spring scans annotations (@Component, @Service, etc.)
Creates beans and injects dependencies
Loads application.yml
Starts web server + listeners