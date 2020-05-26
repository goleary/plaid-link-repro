import React, { useCallback } from "react"
import { usePlaidLink } from "react-plaid-link"

export default () => {
  const onEvent = useCallback(
    (eventName, metadata) => console.log("onEvent", eventName, metadata),
    []
  )
  const onSuccess = useCallback(
    (eventName, metadata) => console.log("onSuccess", eventName, metadata),
    []
  )

  const onExit = useCallback(
    (err, metadata) => console.log("onExit", err, metadata),
    []
  )

  const config = {
    clientName: "Reconcile",
    env: "development",
    product: ["transactions"],
    publicKey: process.env.GATSBY_PLAID_PUBLIC_KEY,
    onSuccess,
    onEvent,
    onExit,
  }
  const { open, ready, error } = usePlaidLink(config)

  return (
    <button onClick={open} disabled={!ready || error}>
      plaid link
    </button>
  )
}
