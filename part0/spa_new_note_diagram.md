```mermaid
sequenceDiagram
    participant browser
    participant server

 browser->>browser: 
    Note right of browser: The browser executes a code that adds a new note and redraws the list of notes.
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_notes
    activate server
    server-->>browser: JSON Response
    deactivate server
