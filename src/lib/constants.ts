import { type Node } from '@vue-flow/core'

export const initialData: Array<Node> = [
    {
        id: "1",
        type: 'trigger',
        position: {
            x: 500,
            y: 0
        },
        data: {
            label: 'Conversation Opened',
            parentId: "-1",
            type: 'conversationOpened',
            oncePerContact: false,
            icon: '',
        }
    },
    {
        id: "d09c08",
        type: 'dateTime',
        position: {
            x: 500,
            y: 250
        },
        data: {
            label: 'Business Hours',
            parentId: "1",
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
        type: 'dateTimeConnector',
        position: {
            x: 400,
            y: 500
        },
        data: {
            label: 'Success',
            parentId: "d09c08",
            connectorType: 'success'
        }
    },
    {
        id: "28c4b9",
        type: 'dateTimeConnector',
        position: {
            x: 600,
            y: 500
        },
        data: {
            label: 'Failure',
            parentId: "d09c08",
            connectorType: 'failure'
        }
    },
    {
        id: "b0653a",
        type: "sendMessage",
        position: {
            x: 400,
            y: 750
        },
        data: {
            label: "Welcome Message",
            parentId: "161f52",
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
        type: 'sendMessage',
        position: {
            x: 600,
            y: 750
        },
        data: {
            label: 'Away Message',
            parentId: "28c4b9",
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
        type: 'addComment',
        position: {
            x: 600,
            y: 1000
        },
        data: {
            label: 'Add Comment',
            parentId: "b6a0c1",
        }
    }
]