export const intialData = [
    {
        id: 1,
        label: 'Conversation Opened',
        type: 'trigger',
        parentId: "-1",
        position: {
            x: 0,
            y: 0
        },
        data: {
            type: 'conversationOpened',
            oncePerContact: false,
            icon: '',
        }
    },
    {
        id: "d09c08",
        label: 'Business Hours',
        type: 'dateTime',
        parentId: "1",
        position: {
            x: 0,
            y: 0
        },
        data: {
            times: [
                {
                    startTime: '09:00',
                    endTime: '17:00',
                    day: 'mon'
                },
                {
                    startTime: '09:00',
                    endTime: '17:00',
                    day: 'tue'
                },
                {
                    startTime: '09:00',
                    endTime: '17:00',
                    day: 'wed'
                },
                {
                    startTime: '09:00',
                    endTime: '17:00',
                    day: 'thu'
                },
                {
                    startTime: '09:00',
                    endTime: '17:00',
                    day: 'fri'
                },
                {
                    startTime: '09:00',
                    endTime: '17:00',
                    day: 'sat'
                },
                {
                    startTime: '09:00',
                    endTime: '17:00',
                    day: 'sun'
                }
            ]
        }
    },
    {
        id: "161f52",
        label: 'Success',
        type: 'dateTimeConnector',
        parentId: "d09c08",
        position: {
            x: 0,
            y: 0
        },
        data: {
            connectorType: 'success'
        }
    },
    {
        id: "28c4b9",
        label: 'Failure',
        type: 'dateTimeConnector',
        parentId: "d09c08",
        position: {
            x: 0,
            y: 0
        },
        data: {
            connectorType: 'failure'
        }
    },
    {
        id: "b0653a",
        label: "Welcome Message",
        type: "sendMessage",
        parentId: "161f52",
        position: {
            x: 0,
            y: 0
        },
        data: {
            payload: [
                {
                    type: "text",
                    text: "Hello there 👋 welcome to the chat!"
                },
                {
                    type: "attachment",
                    attachment: "https://fastly.picsum.photos/id/396/536/354.jpg?hmac=GmUosOuXb6nGkFhmTE-83i0ciQcaleMyvIyqzeFbW58"
                }
            ]
        }
    },
    {
        id: "b6a0c1",
        label: 'Away Message',
        type: 'sendMessage',
        parentId: "28c4b9",
        position: {
            x: 0,
            y: 0
        },
        data: {
            payload: [
                {
                    type: "text",
                    text: "Sorry, we are currently away. We will respond as soon as possible."
                }
            ]
        }
    },
    {
        id: "e879e4",
        label: 'Add Comment',
        type: 'addComment',
        parentId: "b6a0c1",
        position: {
            x: 0,
            y: 0
        }
    }
]