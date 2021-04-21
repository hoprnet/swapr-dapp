import React from 'react'
import { Box, Flex } from 'rebass'
import { CurrencyAmount, Percent, Token } from 'dxswap-sdk'
import { TYPE } from '../../../../theme'
import DoubleCurrencyLogo from '../../../DoubleLogo'
import { DarkCard } from '../../../Card'
import styled from 'styled-components'
import ApyBadge from '../../ApyBadge'
import { ethers } from 'ethers'

const SizedCard = styled(DarkCard)`
  width: 210px;
  height: 108px;
  padding: 12px 16px;
  ${props => props.theme.mediaWidth.upToMedium`
    width: 100%;
  `}
`

interface PairProps {
  token0?: Token
  token1?: Token
  apy: Percent
  usdLiquidity: CurrencyAmount
}

export default function Pair({ token0, token1, usdLiquidity, apy, ...rest }: PairProps) {
  return (
    <SizedCard selectable {...rest}>
      <Flex flexDirection="column" justifyContent="space-between" height="100%">
        <Flex justifyContent="space-between" width="100%">
          <Box>
            <DoubleCurrencyLogo currency0={token0} currency1={token1} size={36} />
          </Box>
          {apy.greaterThan('0') && (
            <Box>
              <ApyBadge apy={apy} />
            </Box>
          )}
        </Flex>
        <Flex flexDirection="column">
          <Box>
            <TYPE.subHeader fontSize="9px" color="text4" lineHeight="14px" letterSpacing="2%" fontWeight="600">
              ${ethers.utils.commify(usdLiquidity.toSignificant(2))} LIQUIDITY
            </TYPE.subHeader>
          </Box>
          <Box>
            <TYPE.body color="white" lineHeight="20px" fontWeight="700" fontSize="16px">
              {token0?.symbol}/{token1?.symbol}
            </TYPE.body>
          </Box>
        </Flex>
      </Flex>
    </SizedCard>
  )
}
