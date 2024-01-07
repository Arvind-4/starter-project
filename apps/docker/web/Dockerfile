FROM python:3.10-slim as builder

ENV PYTHONBUFFERED 1
ENV VIRTUAL_ENV=/opt/venv
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

WORKDIR /apps/web

RUN python3 -m venv $VIRTUAL_ENV

COPY ./apps/web/requirements.txt /apps/web/requirements.txt

RUN pip3 install -r requirements.txt --no-cache-dir


FROM python:3.10-slim-buster AS runner

WORKDIR /apps/web
RUN groupadd -r django \
  && useradd -d /apps/web -r -g django django \
  && chown django:django -R /apps/web
USER django

COPY --from=builder /opt/venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

COPY --chown=django:django ./apps/web /apps/web
COPY --chown=django:django ./apps/web/entrypoint.sh /apps/web/entrypoint.sh

RUN chmod +x /apps/web/entrypoint.sh

ENTRYPOINT [ "/apps/web/entrypoint.sh" ]