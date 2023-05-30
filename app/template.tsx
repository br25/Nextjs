export default function Template({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

// {/* <Layout>
//     {/* Note that the template is given a unique key. */}
//     <Template key={routeParam}>{children}</Template>
// </Layout> */}