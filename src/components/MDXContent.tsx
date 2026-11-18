import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

const components = {
  a: (props: ComponentPropsWithoutRef<"a">) => {
    const href = props.href ?? "#";
    if (href.startsWith("/")) {
      return (
        <Link href={href} className="text-accent-soft underline-offset-4 hover:underline">
          {props.children}
        </Link>
      );
    }
    return (
      <a
        {...props}
        className="text-accent-soft underline-offset-4 hover:underline"
        rel="noreferrer"
        target="_blank"
      />
    );
  },
};

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose-docs">
      <MDXRemote source={source} components={components} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
    </div>
  );
}
