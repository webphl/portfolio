import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Places i’ve worked.
    </Heading>
    <Text variant="description">
      Depuis 2016, j'ai eu le privilège de travailler avec plusieurs entreprises ce qui m'a permit
      de perfectionner mes compétences et mes talents. Ces entreprises auront toujours une place spéciale
       dans mon coeur. Actuellement, je travaille avec{' '}
      <Link href="https://www2.deloitte.com/" target="_blank" rel="noreferrer">
        Deloitte
      </Link>
      .
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
