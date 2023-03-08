import React, { useEffect } from "react";
import router from "next/router";

export default function Home() {
  useEffect(() => {
    router.push("/home/main");
  }, []);

  return <></>;
}
