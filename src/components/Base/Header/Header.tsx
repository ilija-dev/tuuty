import {
  HeaderContainer,
  Inner,
  Left,
  Nav,
  Right,
  List,
  ListItem,
  ItemInner,
  ListIcon,
  ListText,
  Logo,
} from "./Header.style";
import { Button } from "../../Button/Button";
import logo from "../../../assets/images/logo.svg";
import TutorIcon from "../../../assets/images/tutor.svg";
import MetamaskIcon from "../../../assets/images/metamask.svg";
import Link from "next/link";
import { ethers } from "ethers";

const handleWalletConnect = async () => {
  const { ethereum } = window;
  console.log("Handle Wallet Connect");
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    console.log(address);
  } else {
    //setValue("walletAddress", "");
  }
};

export const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <Inner>
        <Left>
          <Link href="/">
            <Logo src={logo.src} />
          </Link>
        </Left>
        <Right>
          <Nav>
            <List>
              <ListItem>
                <Link href="/tutors">
                  <ItemInner>
                    <ListIcon src={TutorIcon.src} />
                    <ListText>Tutors</ListText>
                  </ItemInner>
                </Link>
              </ListItem>
            </List>
          </Nav>
          <Button
            icon={MetamaskIcon}
            onClick={() => {
              handleWalletConnect();
            }}
          >
            Sign In
          </Button>
        </Right>
      </Inner>
    </HeaderContainer>
  );
};
