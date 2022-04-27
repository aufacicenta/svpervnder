import clsx from "clsx";

import { Card } from "ui/card/Card";
import { Typography } from "ui/typography/Typography";
import { HorizontalLine } from "ui/horizontal-line/HorizontalLine";
import { Button } from "ui/button/Button";

import { MarketCardProps } from "./MarketCard.types";
import styles from "./MarketCard.module.scss";

export const MarketCard: React.FC<MarketCardProps> = ({ className }) => (
  <Card className={clsx(styles["market-card"], className)}>
    <Card.Content>
      <div className={styles["market-card__image"]} style={{ backgroundImage: `url(/shared/market-card-img.jpg)` }} />
      <Typography.Text className={clsx(styles["market-card__title"], className)}>
        Which team will win the International 2022 in China?
      </Typography.Text>
      <HorizontalLine />
      <div className={styles["market-card__start-end-time"]}>
        <Typography.Description>Market started - October 21, 2021 09:13 GMT-6</Typography.Description>
        <Typography.Description>Resolution date - October 26, 2021 09:13 GMT-6</Typography.Description>
      </div>
      <Card className={styles["market-card__market-options"]}>
        <Card.Content className={styles["market-card__market-options--card-content"]}>
          <Typography.Headline5 className={styles["market-card__market-options--title"]}>
            What does the market think?
          </Typography.Headline5>
          <div className={styles["market-card__market-options--progres-bar"]}>
            <div
              className={styles["market-card__market-options--progres-bar-width"]}
              style={{ width: "80%", backgroundColor: "#FC59FF" }}
            />
            <div
              className={styles["market-card__market-options--progres-bar-width"]}
              style={{ width: "20%", backgroundColor: "#5356FC" }}
            />
          </div>
          <div className={styles["market-card__market-options--actions"]}>
            <Button color="secondary" fullWidth className={styles["market-card__market-options--actions-button"]}>
              <span
                className={styles["market-card__market-options--actions-button-dot"]}
                style={{ backgroundColor: "#FC59FF" }}
              />{" "}
              Yes <span className={styles["market-card__market-options--actions-button-percentage"]}>80%</span>
            </Button>
            <Button color="secondary" fullWidth className={styles["market-card__market-options--actions-button"]}>
              <span
                className={styles["market-card__market-options--actions-button-dot"]}
                style={{ backgroundColor: "#5356FC" }}
              />{" "}
              No <span className={styles["market-card__market-options--actions-button-percentage"]}>20%</span>
            </Button>
          </div>
          <div className={styles["market-card__market-options--stats"]}>
            <Typography.Description className={styles["market-card__market-options--stats-stat"]} flat>
              <span>Liquidity:</span>
              <span>407.78 DAI</span>
            </Typography.Description>
            <Typography.Description className={styles["market-card__market-options--stats-stat"]} flat>
              <span>Total Volume:</span>
              <span>298000.01 DAI</span>
            </Typography.Description>
          </div>
        </Card.Content>
      </Card>
    </Card.Content>
  </Card>
);
