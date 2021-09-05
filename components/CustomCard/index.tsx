import { Card, Button, Text } from "@arwes/core";
import { CustomCardProps } from "types";

const CustomCard = ({ title, btnText, url, description }: CustomCardProps) => {
  return (
    <Card
      title={title}
      options={
        <Button palette="secondary">
          <a href={url}>
            <Text>{btnText}</Text>
          </a>
        </Button>
      }
      style={{ maxWidth: 400, height: 250 }}
    >
      <Text>{description}</Text>
    </Card>
  );
};

export default CustomCard;
