import { PortableText as BasePortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'

const components = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).url()}
        />
      )
    }
  }
}

export function PortableText({ value }: { value: any }  ) {
  return <BasePortableText value={value} components={components} />
} 