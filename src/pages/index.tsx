import { Inter } from "next/font/google";
import withLayout from "@/layouts/appLayout";
import { Grid } from "@mantine/core";
import SalesCard from "@/views/dashboard/salesCard";
import CustomerCard from "@/views/dashboard/customerCard";
import AllOrdersCard from "@/views/dashboard/allOrdersCard";
import ProductsCard from "@/views/dashboard/productsCard";
import AbandonedCard from "@/views/dashboard/abadonedCard";
import MarketingCard from "@/views/dashboard/marketingCard";
import RecentOrdersCard from "@/views/dashboard/recentOrderCard";
import ChartCard from "@/views/dashboard/chartCard";

const inter = Inter({ subsets: ["latin"] });

const breadcrumbsItem = [{ title: "", href: "/" }];

function Home() {
  return (
    <Grid>
      <Grid.Col span={8}>
        <Grid>
          <Grid.Col span={6}>
            <SalesCard />
          </Grid.Col>
          <Grid.Col span={6}>
            <CustomerCard />
          </Grid.Col>
        </Grid>

        <Grid mt={10}>
          <Grid.Col span={6}>
            <MarketingCard />
          </Grid.Col>
          <Grid.Col span={6}>
            <Grid>
              <Grid.Col span={12}>
                <ProductsCard />
              </Grid.Col>
              <Grid.Col span={12}>
                <AbandonedCard />
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col span={12}>
            <ChartCard />
          </Grid.Col>
        </Grid>
      </Grid.Col>

      <Grid.Col span={4}>
        <Grid>
          <Grid.Col span={12}>
            <AllOrdersCard />
          </Grid.Col>
          <Grid.Col span={12}>
            <RecentOrdersCard />
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
}

export default withLayout(Home, "Home", "Dashboard", breadcrumbsItem);
