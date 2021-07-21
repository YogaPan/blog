import { Link as BaseLink } from 'gatsby'
import styled, { css } from 'styled-components'
import { widthEqualOrSmallerThan } from '@app/config/theme'

const linkStyleMixin = css`
  display: flex;
  align-items: center;
  line-height: 1;
  color: var(--primary-text-color);

  &:hover {
    color: var(--primary-icon-hover-color);
    svg {
      fill: var(--primary-icon-hover-color);
    }
  }

  svg {
    height: 30px;
    width: 30px;
    fill: var(--primary-icon-color);
    transition: var(--transition-duration);
    ${widthEqualOrSmallerThan('sm')} {
      height: 24px;
      width: 24px;
    }
  }
`

const InsideLink = styled(BaseLink)`
  ${linkStyleMixin}
`

const OutsideLink = styled.a.attrs({
  target: '_blank'
})`
  ${linkStyleMixin}
`

InsideLink.Outside = OutsideLink

export default InsideLink
