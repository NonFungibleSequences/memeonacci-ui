import type { Page } from '../src/types/PageComponent'

import styled from 'styled-components'
import Head from 'next/head'
// import { useRouter } from 'next/router'

// import { useWeb3React } from '@web3-react/core'

import Layout from '../src/components/Layout'
import OwnerCheck from '../src/components/OwnerCheck'
import DutchAuction from '../src/components/DutchAuction'
import Operations from '../src/components/Operations'

// import useContract, { State as ContractState } from '../src/hooks/useContract'

import useWeb3 from '../src/hooks/useWeb3'

const Home: Page = () => {
    // const { basePath } = useRouter()
    // const { account } = useWeb3React()
    // const [{ contract }, _, contractState] = useContract()

    const [{ address, contractState, contract }, actions] = useWeb3()

    // #FIXME the basepath for the favicon is a hack for ghpages because it is hosted at a
    // specific project path.  Should probably be removed later
    return (
        <div>
            <Head>
                <title>MemeNumbers</title>
                <meta name="description" content="MemeNumbers" />
                <link rel="icon" href={'/favicon.ico'} />
            </Head>

            <Main>
                {/* <Web2 /> */}

                {contractState && contract && (
                    <div>
                        <Segment />
                        <DutchAuction
                            contractState={contractState}
                            contract={contract}
                            account={address}
                        />

                        <Segment />
                        <OwnerCheck account={address} contract={contract} />

                        <Segment />
                        {address && (
                            <Operations account={address} contract={contract} />
                        )}
                    </div>
                )}
            </Main>
        </div>
    )
}

/*
 */

Home.layout = Layout

export default Home

const Main = styled.main`
    // background-color: hsl(0deg 0% 10%);
`

const Segment = styled.div`
    width: 100%;
    height: 3px;
    background: rgba(196, 196, 196, 1);
    opacity: 1;
    // position: absolute;
    overflow: hidden;
`

// sad
const Web2 = () => {
    return (
        <div>
            <h1>
                {
                    "You don't have to be a mathematician to have a feel for numbers."
                }
            </h1>

            <p>- John Forbes Nash, Jr.</p>
        </div>
    )
}
