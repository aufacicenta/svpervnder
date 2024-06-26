import clsx from "clsx";

import { Typography } from "ui/typography/Typography";
import { Grid } from "ui/grid/Grid";
import { WalletSelector } from "ui/wallet-selector/WalletSelector";
import { useRoutes } from "hooks/useRoutes/useRoutes";

import { NavbarProps } from "./Navbar.types";
import styles from "./Navbar.module.scss";

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const routes = useRoutes();

  return (
    <div className={clsx(styles.navbar, className)}>
      <Grid.Container fluid>
        <Grid.Row>
          <Grid.Col lg={4} sm={4} xs={4}>
            <div />
          </Grid.Col>
          <Grid.Col lg={4} sm={4} xs={4}>
            <div className={styles.navbar__center}>
              <div className={styles["navbar__center--item"]}>
                <Typography.Link href={routes.artists.larskristo()}>Artists</Typography.Link>
              </div>
              <div className={styles["navbar__center--item"]}>
                <Typography.Link href="#">Collections</Typography.Link>
              </div>
              <div className={styles["navbar__center--item"]}>
                <Typography.Link href="#">Events</Typography.Link>
              </div>
              <div className={styles["navbar__center--item"]}>
                <Typography.Link href="#">About</Typography.Link>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col lg={4} sm={4} xs={4}>
            <div className={styles.navbar__right}>
              <div className={styles["navbar__right--item"]}>
                <WalletSelector />
              </div>
            </div>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </div>
  );
};
