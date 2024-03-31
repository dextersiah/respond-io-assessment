import type { Node } from '@vue-flow/core';

export interface Time {
    startTime: string;
    endTime:   string;
    day:       string;
}

export interface Payload {
    type:        string;
    text?:       string;
    attachment?: string;
}

export interface NodeData {
    label?:          string;
    type?:           string;
    oncePerContact?: boolean;
    payload?:        Payload[];
    times?:          Time[];
    connectors?:     string[];
    timezone?:       string;
    action?:         string;
    connectorType?:  string;
    comment?:        string;
}



export type NodeWithData = Node<NodeData>