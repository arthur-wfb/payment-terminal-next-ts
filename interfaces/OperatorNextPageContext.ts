import {NextPageContext} from "next";

export interface OperatorNextPageContext extends NextPageContext{
    query: {
        id: string
    }
}