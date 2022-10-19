import { useEffect } from 'react';

const useTest1 = () => {
  
  
  useEffect(() => {
  },[]);
  let data: any = {};
  const handle = (): any => {};

  const onClick = (param1:any,  param2: any,  param3: any,  param4: any): any => {};
  const click = (param1: string, {...algo}: {algo: string},  param3: any,  param4: any): any => {};
  let fns: any = {handle, click, click};
  return {data, fns};
}

export default useTest1;
