//از کاستوم هوک برای جلوگیری از کدهای تکراری استفاده میشود طوریکه الان ما میخوایم برای اینکه از تکرار کد پرهیز کنیم برای گرفتن کتگوری و محصولات میایم یه کاستوم هوک مینویسیم
//  که درواقع میخواد یه فانکشنی از اون api

import { useEffect, useState } from "react";

// برگردون ولی چون اول کدوم یه فانکشن مینویسیم که نوعش دقیق مشخص نیست یعنی جنریک
export function useApi<T>(fn: () => Promise<T>) {
  const [state, setState] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fn()
      .then((data) => {
        setState(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fn]);

  return {
    data: state,
    isLoading: loading,
    isError: error,
  };
}
