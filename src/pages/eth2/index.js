import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import ButtonLink from "../../components/ButtonLink"
import Card from "../../components/Card"
import ActionCard from "../../components/ActionCard"
import CalloutBanner from "../../components/CalloutBanner"
import Emoji from "../../components/Emoji"
import Eth2Articles from "../../components/Eth2Articles"
import ExpandableCard from "../../components/ExpandableCard"
import GhostCard from "../../components/GhostCard"
import InfoBanner from "../../components/InfoBanner"
import Link from "../../components/Link"
import PageMetadata from "../../components/PageMetadata"
import BannerNotification from "../../components/BannerNotification"
import Translation from "../../components/Translation"
import PageHero from "../../components/PageHero"
import {
  CardContainer,
  Content,
  Page,
  Divider,
} from "../../components/SharedStyledComponents"
import { translateMessageId } from "../../utils/translations"

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`

const H2 = styled.h2`
  text-align: left;
  margin-top: 0;
  margin-bottom: 1rem;
`

const CentreCard = styled(Card)`
  flex: 1 1 30%;
  min-width: 240px;
  margin: 1rem;
  padding: 1.5rem;
  text-align: center;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex: 1 1 30%;
  }
`

const StyledCardContainer = styled(CardContainer)`
  margin-top: 2rem;
  margin-bottom: 3rem;
`

const StyledCard = styled(Card)`
  flex: 1 1 30%;
  min-width: 240px;
  box-shadow: ${(props) => props.theme.colors.tableBoxShadow};
  margin: 1rem;
  padding: 1.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex: 1 1 30%;
  }

  &:hover {
    border-radius: 4px;
    box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.15);
    background: ${(props) => props.theme.colors.tableBackgroundHover};
    transition: transform 0.1s;
    transform: scale(1.02);
  }
`

const Disclaimer = styled.div`
  margin: 0rem 12rem;
  display: flex;
  text-align: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: 0rem 2rem;
  }
`

const StyledInfoBanner = styled(InfoBanner)`
  margin-left: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: 2rem 0;
  }
`

const Vision = styled.div`
  margin-top: 4rem;
`

const ContributeCard = styled.div`
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0rem 3rem;
  margin-bottom: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-left: 0rem;
    margin-right: 0rem;
    flex-direction: column;
    align-items: flex-start;
  }
`

const StyledCallout = styled(CalloutBanner)`
  margin-left: 0rem;
  margin-right: 0rem;
`

const ContributeButton = styled(ButtonLink)`
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 100%;
    margin-top: 1.5rem;
  }
`

const Staking = styled.div`
  padding: 4rem;
  background: ${(props) => props.theme.colors.cardGradient};
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 2rem;
  }
`

const StakingColumns = styled.div`
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`

const CenterH2 = styled(H2)`
  text-align: center;
`

const StakingLeftColumn = styled.div``

const StakingRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0rem 2rem;
  margin-left: 8rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    align-items: flex-start;
    flex-direction: column-reverse;
    margin: 0rem;
    margin-top: 2rem;
  }
`

const StakingCard = styled(StyledCard)`
  margin: 0;
`

const StakingImage = styled(Img)`
  margin: 3rem 0;
  align-self: center;
  width: 100%;
  max-width: 320px;
`

const LeftColumn = styled.div`
  width: 100%;
`

const RightColumn = styled.div`
  width: 100%;
  margin-left: 2rem;
  flex-direction: column;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-left: 0rem;
    flex-direction: column;
  }
`

const Faq = styled.div`
  display: flex;
  margin-top: 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const ResearchContainer = styled.div`
  margin-top: 2rem;
`

const StyledBannerNotification = styled(BannerNotification)`
  display: flex;
  justify-content: center;
`

const StyledEmoji = styled(Emoji)`
  margin-right: 1rem;
  flex-shrink: 0;
`

const paths = [
  {
    emoji: ":rocket:",
    title: <Translation id="page-eth2-scalable" />,
    description: <Translation id="page-eth2-scalable-desc" />,
  },
  {
    emoji: ":shield:",
    title: <Translation id="page-eth2-secure" />,
    description: <Translation id="page-eth2-secure-desc" />,
  },
  {
    emoji: ":evergreen_tree:",
    title: <Translation id="page-eth2-index-staking-sustainability" />,
    description: <Translation id="page-eth2-sustainable-desc" />,
  },
]

const Eth2IndexPage = ({ data }) => {
  const intl = useIntl()

  const heroContent = {
    title: translateMessageId("page-eth2-upgrades", intl),
    header: translateMessageId("page-eth2-upgrading", intl),
    subtitle: translateMessageId("page-eth2-upgrade-desc", intl),
    image: data.merge.childImageSharp.fluid,
    alt: translateMessageId("page-dapps-doge-img-alt", intl),
    buttons: [
      {
        content: translateMessageId("page-eth2-explore-btn", intl),
        path: "/eth2/beacon-chain/",
      },
      {
        content: translateMessageId("page-eth2-whats-ethereum", intl),
        path: "/what-is-ethereum/",
        isSecondary: "isSecondary",
      },
    ],
  }

  const upgrades = [
    {
      image: data.beaconchain.childImageSharp.fixed,
      title: <Translation id="page-eth2-beacon-chain-title" />,
      description: <Translation id="page-eth2-beacon-chain-desc" />,
      to: "/eth2/beacon-chain/",
      date: <Translation id="page-eth2-beacon-chain-estimate" />,
    },
    {
      image: data.themerge.childImageSharp.fixed,
      title: <Translation id="page-eth2-docking" />,
      description: <Translation id="page-eth2-docking-desc" />,
      to: "/eth2/merge/",
      date: <Translation id="page-eth2-docking-estimate" />,
    },
    {
      image: data.shards.childImageSharp.fixed,
      title: <Translation id="page-eth2-shard-title" />,
      description: <Translation id="page-eth2-shard-desc" />,
      to: "/eth2/shard-chains/",
      date: <Translation id="page-eth2-shard-estimate" />,
    },
  ]

  return (
    <Page>
      <PageMetadata
        title={translateMessageId("page-eth2-meta-title", intl)}
        description={translateMessageId("page-eth2-meta-desc", intl)}
      />
      <StyledBannerNotification shouldShow>
        <StyledEmoji text=":megaphone:" />
        <div>
          <b>Latest:</b> Eth2 researchers are working on ways to accelerate the
          merge. It will probably happen earlier than expected. More soon.{" "}
          <Link to="https://blog.ethereum.org/category/research-and-development/">
            Follow updates
          </Link>
        </div>
      </StyledBannerNotification>
      <PageHero content={heroContent} />
      <Divider />
      <Content>
        <Row>
          <GhostCard>
            <H2>
              <Translation id="page-eth2-whats-eth2" />
            </H2>
            <Translation id="page-eth2-whats-eth2-desc" />
          </GhostCard>
          <StyledInfoBanner isWarning={true}>
            <H2>
              <Translation id="page-eth2-what-to-do" />
            </H2>
            <Translation id="page-eth2-what-to-do-desc" /> <br />
            <Link to="/eth2/get-involved/">
              <Translation id="page-eth2-get-involved" />
            </Link>
          </StyledInfoBanner>
        </Row>
        <Vision>
          <H2>
            <Translation id="page-eth2-vision" />
            <Emoji ml={`0.5rem`} text=":sparkles:" />
          </H2>
          <p>
            <Translation id="page-eth2-vision-desc" />
          </p>
          <CardContainer>
            {paths.map((path, idx) => (
              <CentreCard
                key={idx}
                emoji={path.emoji}
                title={path.title}
                description={path.description}
              />
            ))}
          </CardContainer>
        </Vision>
      </Content>
      <StyledCallout
        image={data.oldship.childImageSharp.fluid}
        alt={translateMessageId("page-eth-whats-eth-hero-alt", intl)}
        title={translateMessageId("page-eth2-dive", intl)}
        description={translateMessageId("page-eth2-dive-desc", intl)}
      >
        <div>
          <ButtonLink to="/eth2/vision/">
            <Translation id="page-eth2-vision-btn" />
          </ButtonLink>
        </div>
      </StyledCallout>
      <Content>
        <H2>
          <Translation id="page-eth2-the-upgrades" />
        </H2>
        <p>
          <Translation id="page-eth2-the-upgrades-desc" />
        </p>
        <StyledCardContainer>
          {upgrades.map((upgrade, idx) => (
            <ActionCard
              isRight
              key={idx}
              image={upgrade.image}
              title={upgrade.title}
              description={upgrade.description}
              to={upgrade.to}
            >
              <h6>{upgrade.date}</h6>
            </ActionCard>
          ))}
        </StyledCardContainer>
      </Content>
      {/* TODO: Upgrade existing Eth2Diagram with new plan, then reinstate here */}
      <Content>
        <ContributeCard>
          <div>
            <H2>
              <Translation id="page-eth2-help" />
            </H2>
            <Translation id="page-eth2-help-desc" />
          </div>
          <ContributeButton isSecondary to="/eth2/get-involved/">
            <Translation id="page-eth2-get-involved-2" />
          </ContributeButton>
        </ContributeCard>
        <Disclaimer>
          <em>
            <Translation id="page-eth2-unofficial-roadmap" />
          </em>
        </Disclaimer>
      </Content>

      <Staking>
        <H2>
          <Translation id="page-eth2-index-staking" />
        </H2>
        <StakingColumns>
          <StakingLeftColumn>
            <p>
              <Translation id="page-eth2-index-staking-desc" />
            </p>
            <h3>
              <Translation id="page-eth2-index-staking-step-1" />
            </h3>
            <p>
              <Translation id="page-eth2-index-staking-step-1-desc" />
            </p>
            <ButtonLink to="https://launchpad.ethereum.org">
              <Translation id="page-eth2-index-staking-step-1-btn" />
            </ButtonLink>
            <h3>
              <Translation id="page-eth2-index-staking-step-2" />
            </h3>
            <p>
              <Translation id="page-eth2-index-staking-step-2-desc" />
            </p>
            <ButtonLink to="/eth2/deposit-contract/">
              <Translation id="page-eth2-index-staking-step-2-btn" />
            </ButtonLink>
          </StakingLeftColumn>
          <StakingRightColumn>
            <StakingCard
              emoji=":money_with_wings:"
              title={translateMessageId("page-eth2-index-staking-learn", intl)}
              description={translateMessageId(
                "page-eth2-index-staking-learn-desc",
                intl
              )}
            >
              <ButtonLink to="/eth2/staking/">
                <Translation id="page-eth2-deposit-contract-staking-more-link" />
              </ButtonLink>
            </StakingCard>
            <StakingImage fluid={data.rhino.childImageSharp.fluid} />
          </StakingRightColumn>
        </StakingColumns>
      </Staking>
      <Divider />
      <Content>
        <CenterH2>
          <Translation id="page-eth2-question-title" />
        </CenterH2>
        <Faq>
          <LeftColumn>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-eth2-question-1-desc",
                intl
              )}
              title={translateMessageId("page-eth2-question-1-title", intl)}
            >
              <Link to="/eth2/beacon-chain/">
                <Translation id="page-eth2-beacon-chain-title" />
              </Link>
              <p>
                <Translation id="page-eth2-beacon-chain-date" />
              </p>
              <Link to="/eth2/merge/">
                <Translation id="page-eth2-docking" />
              </Link>
              <p>
                <Translation id="page-eth2-docking-answer-1" />{" "}
                <Link to="/glossary/#mainnet">
                  <Translation id="page-eth2-docking-mainnet" />
                </Link>
              </p>
              <Link to="/eth2/shard-chains/">
                <Translation id="page-eth2-shard-title" />
              </Link>
              <p>
                <Translation id="page-eth2-shard-date" />
              </p>
            </ExpandableCard>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-eth2-question-2-desc",
                intl
              )}
              title={translateMessageId("page-eth2-question-2-title", intl)}
            >
              <p>
                <Translation id="page-eth2-answer-1" />{" "}
                <Link to="/eth2/beacon-chain/">
                  <Translation id="page-eth2-more-on-upgrades" />
                </Link>
              </p>
              <p>
                <Translation id="page-eth2-answer-2" />{" "}
                <Link to="/glossary/#mainnet">
                  <Translation id="page-eth2-docking-mainnet" />
                </Link>{" "}
              </p>
              <p>
                <Translation id="page-eth2-answer-4" />{" "}
                <Link to="/eth2/vision/">
                  <Translation id="page-eth2-vision-btn" />
                </Link>
              </p>
            </ExpandableCard>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-eth2-question-3-desc",
                intl
              )}
              title={translateMessageId("page-eth2-question-3-title", intl)}
            >
              <p>
                <Translation id="page-eth2-question3-answer-1" />
              </p>
              <p>
                <Translation id="page-eth2-question-3-answer-2" />
              </p>
              <ul>
                <li>
                  <Link to="/eth2/merge/">
                    <Translation id="page-eth2-just-docking" />
                  </Link>
                </li>
                <li>
                  <Link to="/eth2/shard-chains/">
                    <Translation id="page-eth2-shard-lower" />
                  </Link>
                </li>
              </ul>
              <p>
                <Translation id="page-eth2-question-3-answer-3" />
              </p>
              <Link to="https://ethresear.ch">
                <Translation id="page-eth2-question-3-answer-3-link" />
              </Link>
            </ExpandableCard>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-eth2-question-4-desc",
                intl
              )}
              title={translateMessageId("page-eth2-question-4-title", intl)}
            >
              <p>
                <Translation id="page-eth2-question-4-answer-1" />{" "}
                <Link to="/developers/docs/mining/">
                  <Translation id="page-eth2-miners" />
                </Link>
              </p>
              <p>
                <Translation id="page-eth2-question-4-answer-2" />{" "}
                <Link to="/eth2/merge/">
                  <Translation id="page-eth2-just-docking" />
                </Link>
              </p>
              <p>
                <Translation id="page-eth2-question-4-answer-3" />{" "}
                <Link to="/developers/docs/consensus-mechanisms/pos/">
                  <Translation id="page-eth2-proof-stake-link" />
                </Link>
              </p>
              <p>
                <Translation id="page-eth2-question-4-answer-6" />{" "}
                <Link to="/eth2/staking/">
                  <Translation id="page-eth2-question-4-answer-7" />
                </Link>
              </p>
              <p>
                <Translation id="page-eth2-question-4-answer-8" />
              </p>
            </ExpandableCard>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-eth2-question-5-desc",
                intl
              )}
              title={translateMessageId("page-eth2-question-5-title", intl)}
            >
              <p>
                <Translation id="page-eth2-question-5-answer-1" />
              </p>
              <p>
                <Link to="/eth2/staking/">
                  <Translation id="page-eth2-deposit-contract-staking-more-link" />
                </Link>
              </p>
            </ExpandableCard>
          </LeftColumn>
          <RightColumn>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-eth2-question-6-desc",
                intl
              )}
              title={translateMessageId("page-eth2-question-6-title", intl)}
            >
              <p>
                <Translation id="page-eth2-question-6-answer-1" />
              </p>
              <ul>
                <li>
                  <Link to="/eth2/merge/">
                    <Translation id="page-eth2-just-docking" />
                  </Link>
                </li>
                <li>
                  <Link to="/eth2/shard-chains/">
                    <Translation id="page-eth2-shard-lower" />
                  </Link>
                </li>
              </ul>
              <p>
                <Translation id="page-eth2-question-6-answer-3" />{" "}
                <Link to="https://blog.ethereum.org">
                  <Translation id="page-eth2-eth-blog" />
                </Link>
              </p>
              <p>
                <Translation id="page-eth2-question-6-answer-4" />{" "}
                <Link to="https://eth2.news">
                  <Translation id="page-eth2-whats-new" />
                </Link>
              </p>
              <p>
                <Translation id="page-eth2-question-6-answer-5" />{" "}
                <Link to="https://ethresear.ch">
                  <Translation id="page-eth2-question-3-answer-3-link" />
                </Link>
              </p>
            </ExpandableCard>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-eth2-question-7-desc",
                intl
              )}
              title={translateMessageId("page-eth2-question-7-title", intl)}
            >
              <p>
                <Translation id="page-eth2-question-7-teams" />
              </p>
              <ul>
                <li>
                  <Link to="https://trinity.ethereum.org/">
                    <Translation id="page-eth2-question-7-trinity" />
                  </Link>{" "}
                  <Translation id="page-eth2-question-7-trinity-lang" />
                </li>
                <li>
                  <Link to="https://sigmaprime.io/">
                    <Translation id="page-eth2-question-7-lighthouse" />
                  </Link>{" "}
                  <Translation id="page-eth2-question-7-lighthouse-lang" />
                </li>
                <li>
                  <Link to="https://nimbus.team/">
                    <Translation id="page-eth2-question-7-nimbus" />
                  </Link>{" "}
                  <Translation id="page-eth2-question-7-nimbus-lang" />
                </li>
                <li>
                  <Link to="https://prysmaticlabs.com/">
                    <Translation id="page-eth2-question-7-prysm" />
                  </Link>{" "}
                  <Translation id="page-eth2-question-7-prysm-lang" />
                </li>
                <li>
                  <Link to="https://nethermind.io/">
                    <Translation id="page-eth2-question-7-cortex" />
                  </Link>{" "}
                  <Translation id="page-eth2-question-7-cortex-lang" />
                </li>
                <li>
                  <Link to="https://pegasys.tech/teku-ethereum-2-for-enterprise/">
                    <Translation id="page-eth2-question-7-teku" />
                  </Link>{" "}
                  <Translation id="page-eth2-question-7-teku-lang" />
                </li>
                <li>
                  <Link to="https://github.com/chainsafe/lodestar#getting-started">
                    <Translation id="page-eth2-question-7-lodestar" />
                  </Link>{" "}
                  <Translation id="page-eth2-question-7-lodestar-lang" />
                </li>
              </ul>
            </ExpandableCard>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-eth2-question-8-desc",
                intl
              )}
              title={translateMessageId("page-eth2-question-8-title", intl)}
            >
              <p>
                <Translation id="page-eth2-question-8-answer-1" />
              </p>
              <p>
                <Translation id="page-eth2-question-8-answer-2" />{" "}
                <Link to="/eth2/beacon-chain">
                  <Translation id="page-eth2-upgrades-guide" />
                </Link>
              </p>
              <p>
                <Translation id="page-eth2-question-8-answer-3" />
              </p>
              <p>
                <Translation id="page-eth2-question-8-answer-4" />
              </p>
              <p>
                <ButtonLink to="/eth2/vision/">
                  <Translation id="page-eth2-question-8-answer-6" />
                </ButtonLink>
              </p>
            </ExpandableCard>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-eth2-question-9-desc",
                intl
              )}
              title={translateMessageId("page-eth2-question-9-title", intl)}
            >
              <p>
                <Translation id="page-eth2-question-9-answer-1" />{" "}
                <Link to="/eth2/staking/">
                  <Translation id="page-eth2-question-9-stake-eth" />
                </Link>
              </p>
              <p>
                <Translation id="page-eth2-question-9-answer-2" />{" "}
                <Link to="/eth2/get-involved/">
                  <Translation id="page-eth2-clients" />
                </Link>
              </p>
              <p>
                <Translation id="page-eth2-question-9-answer-3" />{" "}
                <Link to="/eth2/get-involved/bug-bounty/">
                  <Translation id="page-eth2-bug-bounty" />
                </Link>
              </p>
              <p>
                <Translation id="page-eth2-question-9-answer-4" />{" "}
                <Link to="https://ethresear.ch">
                  <Translation id="page-eth2-question-3-answer-3-link" />
                </Link>
              </p>
            </ExpandableCard>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-eth2-question-10-desc",
                intl
              )}
              title={translateMessageId("page-eth2-question-10-title", intl)}
            >
              <p>
                <Translation id="page-eth2-question-10-answer-1" />{" "}
                <Link to="/eth2/beacon-chain/">
                  <Translation id="page-eth2-question-10-answer-1-link" />
                </Link>
              </p>
              <p>
                <Translation id="page-eth2-question-10-answer-2" />
              </p>
              <p>
                <Translation id="page-eth2-question-10-answer-3" />
              </p>
              <p>
                <Translation id="page-eth2-question-10-answer-5" />
              </p>
              <p>
                <Translation id="page-eth2-question-10-answer-6" />{" "}
                <Link to="/developers/docs/consensus-mechanisms/pos/">
                  <Translation id="page-eth2-proof-stake-link" />
                </Link>
              </p>
              <p>
                <Translation id="page-eth2-question-10-answer-7" />{" "}
                <Link to="/eth2/shard-chains/#code-execution">
                  <Translation id="page-eth2-question-10-answer-8" />
                </Link>
              </p>
            </ExpandableCard>
          </RightColumn>
        </Faq>
      </Content>
      <Divider />
      <Content>
        <H2>
          <Translation id="page-eth2-stay-up-to-date" />
        </H2>
        <p>
          <Translation id="page-eth2-stay-up-to-date-desc" />
        </p>
        <Eth2Articles />
        <ResearchContainer>
          <H2>
            <Translation id="page-eth2-take-part" />
          </H2>
          <p>
            <Translation id="page-eth2-take-part-desc" />
          </p>
          <ButtonLink to="https://ethresear.ch/">
            <Translation id="page-eth2-head-to" /> ethresear.ch
          </ButtonLink>
        </ResearchContainer>
      </Content>
    </Page>
  )
}

export default Eth2IndexPage

export const query = graphql`
  query {
    oldship: file(relativePath: { eq: "eth2/oldship.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rhino: file(relativePath: { eq: "eth2/eth2_rhino.png" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    merge: file(relativePath: { eq: "eth2/merge.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beaconchain: file(relativePath: { eq: "eth2/core.png" }) {
      childImageSharp {
        fixed(width: 420) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    shards: file(relativePath: { eq: "eth2/newrings.png" }) {
      childImageSharp {
        fixed(width: 420) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    themerge: file(relativePath: { eq: "eth2/merge.png" }) {
      childImageSharp {
        fixed(width: 420) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
