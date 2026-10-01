"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import {
  Download,
  FileText,
  X,
} from "lucide-react";
import { useState } from "react";

type DocumentItem = {
  name: string;
  file: string;
};

const documents: DocumentItem[] = [
  {
    name: "CV",
    file: "/documents/cvjoel.pdf",
  },
  {
    name: "Certificado 1",
    file: "/documents/certificado1.pdf",
  },
  {
    name: "Certificado 2",
    file: "/documents/certificado2.pdf",
  },
  {
    name: "Certificado 3",
    file: "/documents/certificado3.pdf",
  },
  {
    name: "Certificado 4",
    file: "/documents/certificado4.pdf",
  },
  {
    name: "Certificado 5",
    file: "/documents/certificado5.pdf",
  },
  {
    name: "Certificado 6",
    file: "/documents/certificado6.pdf",
  },
  {
    name: "Certificado 7",
    file: "/documents/certificado7.pdf",
  },
];

export default function Documents() {
  const [open, setOpen] = useState(false);

  const [selectedDocument, setSelectedDocument] =
    useState(documents[0]);

  return (
    <>
      {/* BOTÓN PARA ABRIR */}

      <Button
        variant="outline"
        borderColor="var(--border)"
        color="var(--foreground)"
        borderRadius="full"
        px={6}
        onClick={() => setOpen(true)}
        _hover={{
          bg: "var(--border)",
        }}
      >
        <FileText size={16} />
        CV & Certificados
      </Button>

      {/* MODAL */}

      {open && (
        <Box
          position="fixed"
          inset="0"
          zIndex="1000"
          bg="rgba(0, 0, 0, 0.75)"
          backdropFilter="blur(8px)"
          p={{
            base: 3,
            md: 8,
          }}
          onClick={() => setOpen(false)}
        >
          {/* VENTANA */}

          <Flex
            w="full"
            h="full"
            maxW="1400px"
            mx="auto"
            direction="column"
            bg="var(--background)"
            border="1px solid"
            borderColor="var(--border)"
            borderRadius="2xl"
            overflow="hidden"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* HEADER */}

            <Flex
              minH="64px"
              px={{
                base: 4,
                md: 6,
              }}
              align="center"
              justify="space-between"
              borderBottom="1px solid"
              borderColor="var(--border)"
              flexShrink={0}
            >
              <Box>
                <Heading
                  fontSize="md"
                  color="var(--foreground)"
                >
                  CV & Certificados
                </Heading>

                <Text
                  fontSize="xs"
                  color="var(--muted)"
                  mt={1}
                >
                  {selectedDocument.name}
                </Text>
              </Box>

              {/* BOTÓN CERRAR */}

              <IconButton
                aria-label="Cerrar"
                variant="ghost"
                color="var(--muted)"
                onClick={() =>
                  setOpen(false)
                }
                _hover={{
                  color:
                    "var(--foreground)",
                  bg: "var(--border)",
                }}
              >
                <X size={18} />
              </IconButton>
            </Flex>

            {/* CONTENIDO */}

            <Flex
              flex="1"
              minH="0"
              direction={{
                base: "column",
                md: "row",
              }}
            >
              {/* DOCUMENTOS */}

              <Box
                w={{
                  base: "full",
                  md: "220px",
                }}
                borderRight={{
                  base: "none",
                  md: "1px solid",
                }}
                borderBottom={{
                  base: "1px solid",
                  md: "none",
                }}
                borderColor="var(--border)"
                overflowY="auto"
                flexShrink={0}
                p={3}
              >
                {documents.map(
                  (document) => {
                    const selected =
                      selectedDocument.file ===
                      document.file;

                    return (
                      <Button
                        key={
                          document.file
                        }
                        w="full"
                        justifyContent="flex-start"
                        variant="ghost"
                        fontWeight="400"
                        color={
                          selected
                            ? "var(--foreground)"
                            : "var(--muted)"
                        }
                        bg={
                          selected
                            ? "var(--border)"
                            : "transparent"
                        }
                        mb={1}
                        onClick={() =>
                          setSelectedDocument(
                            document
                          )
                        }
                        _hover={{
                          bg: "var(--border)",
                          color:
                            "var(--foreground)",
                        }}
                      >
                        <FileText
                          size={15}
                        />

                        {document.name}
                      </Button>
                    );
                  }
                )}
              </Box>

              {/* PDF */}

              <Box
                flex="1"
                minW="0"
                minH="0"
                bg="#222"
                position="relative"
              >
                <iframe
                  src={
                    selectedDocument.file
                  }
                  title={
                    selectedDocument.name
                  }
                  width="100%"
                  height="100%"
                  style={{
                    border: "none",
                  }}
                />
              </Box>
            </Flex>

            {/* FOOTER */}

            <Flex
              minH="60px"
              px={{
                base: 4,
                md: 6,
              }}
              align="center"
              justify="flex-end"
              borderTop="1px solid"
              borderColor="var(--border)"
              flexShrink={0}
            >
              <Button
                bg="var(--accent)"
                color="var(--background)"
                borderRadius="full"
                px={5}
                onClick={() => {
                  const link =
                    document.createElement(
                      "a"
                    );

                  link.href =
                    selectedDocument.file;

                  link.download =
                    selectedDocument.name;

                  link.click();
                }}
                _hover={{
                  opacity: 0.85,
                }}
              >
                <Download
                  size={16}
                />

                Descargar
              </Button>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
}