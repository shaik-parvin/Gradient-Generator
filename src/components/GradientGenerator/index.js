import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientContainer,
  ResponsiveGradient,
  Heading,
  Description,
  UnorderedList,
  ColorDescription,
  ColorPickerContainer,
  ColorInputContainer,
  ColorValue,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onGenerate = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      activeGradientDirection,
      fromColorInput,
      toColorInput,
      gradientValue,
    } = this.state

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveGradient>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Description>Choose Direction</Description>
          <UnorderedList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionDetails={eachDirection}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
                isActive={activeGradientDirection === eachDirection.value}
              />
            ))}
          </UnorderedList>
          <ColorDescription>Pick the Colors</ColorDescription>
          <ColorPickerContainer>
            <ColorInputContainer>
              <ColorValue>{fromColorInput}</ColorValue>
              <ColorInput
                onChange={this.onChangeFromColor}
                value={fromColorInput}
                type="color"
              />
            </ColorInputContainer>
            <ColorInputContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <ColorInput
                onChange={this.onChangeToColor}
                value={toColorInput}
                type="color"
              />
            </ColorInputContainer>
          </ColorPickerContainer>
          <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
        </ResponsiveGradient>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
