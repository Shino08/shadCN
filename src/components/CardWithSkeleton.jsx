import Skeleton from "react-loading-skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const CardWithSkeleton = ({ loading, data }) => {
  return (
    <Card className="max-w-md mx-auto ">
      <CardHeader>
        <CardTitle>{loading ? <Skeleton width={120} /> : data.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <>
            <Skeleton height={16} count={2} style={{ marginBottom: 8 }} />
            <Skeleton height={154} />
          </>
        ) : (
          <>
            <p>{data.description}</p>
            <img
              src={data.image}
              alt=""
              className="w-full h-36 object-cover mt-2"
            />
          </>
        )}
      </CardContent>
    </Card>
  );
};
